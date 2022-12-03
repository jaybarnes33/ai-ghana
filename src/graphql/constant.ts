export const GET_USER_ARTICLES = `
    query GetUserArticles($page: Int!) {
        user(username: "aighana") {
            publication {
                posts(page: $page) {
                    title
                    brief
                    slug
                }
            }
        }
    }
`;
