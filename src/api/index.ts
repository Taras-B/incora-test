import axios from 'axios'
import { IComment, IPost, IUser } from '../type'

export const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
})

export const userAPI = {
    async getAll() {
        const response = await instance.get<Array<IUser>>('users')
        return response.data
    }
}

export const postsAPI = {
    async getByUserId(userId: number) {
        const response = await instance.get<Array<IPost>>(`posts?userId=${userId}`)
        return response.data
    },
    async getComments(postId: number) {
        const response = await instance.get<Array<IComment>>(`posts/${postId}/comments`)
        return response.data
    },
    async create(title: string, body: string, userId: number) {
        const response = await instance.post<IPost>('posts', { title, body, userId })
        return response.data
    },
    async update(body: IPost) {
        const response = await instance.put<IPost>('posts', body)
        return response.data
    },
    async delete(postId: number) {
        const response = await instance.delete<IPost>(`posts/${postId}`)
        return response.data
    },
}