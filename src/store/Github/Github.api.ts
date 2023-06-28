import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {IRepos, IUSer, ServerResponse} from "../../Models/Models";

// @ts-ignore
export const githubApi = createApi({
    reducerPath: 'github/api', baseQuery: fetchBaseQuery({baseUrl: 'https://api.github.com/'}), refetchOnFocus: true, endpoints: build => ({
        searchUsers: build.query<IUSer[], string>({
            query: (search:string) => ({
                url: `search/users`,
                params: {
                    q: search,
                    per_page: 10
                }
                          }),
            transformResponse: (resp: ServerResponse<IUSer>) => resp.items
        }),
        getUserepos: build.query<IRepos[], string>({
            query: (username: string) => ({
                url: `users/${username}/repos`
            })
        })

    })
})

export const {useSearchUsersQuery, useLazyGetUsereposQuery} = githubApi

