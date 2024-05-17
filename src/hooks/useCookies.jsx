export const useCookies = () => {
    if (typeof document === "undefined") return undefined;

    const setCookie = (name, value, days) => {
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
    };

    const getCookie = (name) => {
        const cookie = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
        return cookie ? cookie[2] : null;
    };

    const deleteCookie = (name) => {
        setCookie(name, '', -1);
    };

    const deleteAllCookies = () => {
        const cookies = document.cookie.split(";");

        cookies.forEach(cookie => {
            const eqPos = cookie.indexOf("=");
            const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
            document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
        });
    };

    return { setCookie, getCookie, deleteCookie, deleteAllCookies };
};
