jQuery(document).ready(() => {
    const regBtn = $("#register-button");
    const loginBtn = $("#login-button");
    const verifyBtn = $("#verification-button");
    const registerModalBody = $("#register-form-modal-body");
    const registerForm = $("#register-form");
    const verificationForm = $("#verification-form");
    const verificationError = $("#verification-error-msg");
    const loginModal = $("#login-modal");
    const loader = `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>`;

    const SERVER_URL = "https://esummitiitm.org";
    // const SERVER_URL = "http://localhost:5100";

    async function postData(type, serializedFormData) {
        try {
            let res = await fetch(`${SERVER_URL}/api/esummit-user/${type}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                },
                credentials: "include",
                body: serializedFormData,
            });
            let resJson = await res.json();
            if (res.status === 401 && type === "login") {
                loginBtn.html("Login");
                $("#password-incorrect").show();
            }
            if (resJson.success) {
                //console.log(resJson);
                if (type === "register") {
                    // await showSummitID(resJson.data.summitID);
                    sessionStorage.removeItem("serializedFormData");
                    location.reload();
                } else if (res.ok) {
                    location.reload();
                }
            } else {
                console.log(res);
                loginBtn.html("Login");
                regBtn.html("Register");
                console.log("registration error");
            }
        } catch (error) {
            console.log(error);
        }
    }

    async function sendVerificationMail(email) {
        let res = await fetch(`${SERVER_URL}/api/esummit-user/send-mail?to=${email}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
        });
        if (!res.ok) {
            throw new Error("Mail couldn't be sent. Please try again later.")
        }
    }

    async function verifyCode(code) {
        try {
            const codeFromCookie = document.cookie.split(";").find((cookie) => cookie.trim().startsWith("ESUMMIT_IITM_VERIFICATION_TOKEN=")).split("=")[1];
            return code === codeFromCookie;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async function showSummitID(summitID) {
        const updatedHtml = `
    <h2 class="text-center">Please note your E-Summit ID. You will use this to log in and register to other events.
        <br/>
        <h1>
            <strong>${summitID}<strong>
        </h1>
        <br>
    </h2>
    <h4>You may now close this window.</h4>
    `;
        registerModalBody.html(updatedHtml);
    }

    function showVerificationField() {
        registerForm.addClass("hidden");
        verificationForm.removeClass("hidden");
    }

    async function submitHandler(form, ev) {
        ev.preventDefault();

        const type = $(form).attr("id").split("-")[0];
        $(form).find(":submit").html(loader);

        const formData = new FormData(form);
        let serializedFormData = JSON.stringify(Object.fromEntries(formData.entries()));

        if (type === "login") {
            await postData("login", serializedFormData);
        } else {
            try {
                regBtn.html(loader);
                const email = formData.get("email");

                // 'Back up' to session storage
                sessionStorage.setItem("serializedFormData", serializedFormData);
                await sendVerificationMail(email);
                showVerificationField();

                verificationForm.on("submit", async function (e) {
                    e.preventDefault();
                    const code = new FormData(this).get("code");
                    const isEmailValid = await verifyCode(code);

                    if (isEmailValid) {
                        verifyBtn.html(loader);
                        const backedUpData = sessionStorage.getItem("serializedFormData");
                        await postData("register", backedUpData);
                    } else verificationError.show();
                })
            } catch (error) {
                alert(error)
            }
        }
    }

    const form = $(".form-validate");
    form.each(function () {
        const elem = $(this);
        elem.validate({
            errorClass: "is-invalid",
            validClass: "is-valid",
            errorElement: "div",
            focusInvalid: false,
            rules: {
                email: {
                    required: true,
                    email: true,
                    normalizer: (val) => val.toLowerCase(),
                    remote: "/api/esummit-user/check-user/email",
                },
                password: {
                    required: true,
                    minlength: 6,
                    maxlength: 15,
                },
                phone: {
                    required: true,
                    digits: true,
                    minlength: 10,
                    maxlength: 10,
                    remote: "/api/esummit-user/check-user/phone",
                },
                summitID: {
                    required: true,
                    digits: true,
                    minlength: 4,
                    maxlength: 4,
                    remote: "/api/esummit-user/check-user/summitID"
                },
                instituteName: "required",
                designation: "required",
            },
            errorPlacement: function (error, element) {
                element.parent().append(error);
            },
            messages: {
                email: {
                    remote: "This E-mail address is already in use",
                },
                summitID: {
                    remote: "This Summit ID doesn't exist. Please input a valid Summit ID."
                },
                phone: {
                    remote: "This contact number is already associated to an account",
                }
            },
            submitHandler: submitHandler,
        });
    });

});


