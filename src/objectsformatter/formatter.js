export const formatTheIssue = (issue) => ({
    issueTitle:  issue.title,
    number: issue.number,
    state: issue.state,
    updatedAt:issue.updated_at,
    url:issue.url,
    user:issue.user.login
})