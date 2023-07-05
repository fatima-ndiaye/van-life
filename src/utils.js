import { redirect } from "./redirectUtils"

export async function requireAuth() {
    const isLoggedIn = true

    if (!isLoggedIn) {
        throw redirect("/login?message=You must log in first")
    }
}