export async function getGithubProfile() {
    const response = await fetch('https://api.github.com/users/VFGarciaDev')
    const data = await response.json()
    const picture = await data.avatar_url
    return picture
}