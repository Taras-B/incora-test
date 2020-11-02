import axios from 'axios'
import { SignInFormData } from '../pages/SignIn'
import { IAuthUser } from '../store/ducks/auth/type'
import { IComment, IPost, IUser } from '../type'

export const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
})

export const userAPI = {
    async getAll(): Promise<IUser[]> {
        const response = await instance.get<Array<IUser>>('users')
        return response.data
    },
    async authPost(body: SignInFormData): Promise<IAuthUser> {
        const response = await instance.post<IAuthUser>('users', body)
        return response.data
    }
}

export const postsAPI = {
    async getByUserId(userId: number) {
        const response = await instance.get<Array<IPost>>(`posts?userId=${userId}`)
        return response.data
    },
    async getByPostId(postId: number) {
        const response = await instance.get<IPost>(`posts/${postId}`)
        return response.data
    },
    async getComments(postId: number) {
        const response = await instance.get<Array<IComment>>(`posts/${postId}/comments`)
        return response.data
    },
    async create(body: { title: string, body: string, userId: number }) {
        const response = await instance.post<IPost>('posts', body)
        return response.data
    },
    async update(body: IPost, id: number) {
        const response = await instance.put<IPost>(`posts/${id}`, body)
        return response.data
    },
    async delete(postId: number) {
        const response = await instance.delete<number>(`posts/${postId}`)
        return response.status
    },
}