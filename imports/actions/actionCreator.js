export function loginCommand(user){
    return {
        type: 'LOGIN_COMMAND',
        user,
    }
}
