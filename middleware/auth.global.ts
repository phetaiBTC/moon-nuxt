export default defineNuxtRouteMiddleware((to, from) => {
    // ✅ ยกเว้นหน้า login
    const publicPages = ['/auth/login', '/auth/register', '/forgot-password'];

    if (publicPages.includes(to.path)) return;

    const token = useCookie('token').value;

    if (!token) {
        return navigateTo('/auth/login');
    }

    try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        const exp = payload.exp;

        // ✅ ตรวจสอบ token หมดอายุ
        if (Date.now() >= exp * 1000) {
            return navigateTo('/auth/login');
        }
    } catch (error) {
        // ✅ token ไม่ถูกต้อง
        return navigateTo('/auth/login');
    }
});
