
// nav field
/*
nav: {
    roles: [], // array of { 'tapp_admin', 'instructor' }
    selectedRole: null,
    user: null,

    selectedTab: null,

    // list of unread notifications (string can contain HTML, but be careful because it is not sanitized!)
    notifications: [],
    isDevelopment: null,
    alerts: [],
    selectedApplicant: null,
    selectedRound: null,
    selectedSession: null,
},
*/

export default (state = { roles: [], selectedRole: null, user: null, selectedTab: null, notifications: [], isDevelopment: null, alerts:[], selectedApplicant: null }, action) => {
    switch (action.type) {
        case:
            return;

        default:
            return state;
        }
}
