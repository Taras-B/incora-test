import React from 'react'
import { act, fireEvent, render, screen } from '@testing-library/react'

import { IPropsPostForm, PostForm } from '../PostForm'
import userEvent from '@testing-library/user-event'

const findInput = (inputName: string, type: 'input' | 'textarea' = 'input') => {
  return screen.getByTestId(inputName).parentElement?.querySelector(type)
}
describe('component PostForm', () => {
  describe('component title and description props isEmpty', () => {
    const postProps: IPropsPostForm = {
      buttonName: 'submit',
      addPost: jest.fn(),
    }

    test('should is correct render', () => {
      render(<PostForm {...postProps} />)
      // screen.debug()
      expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument()
    })
    test('should is empty "title" input', () => {
      render(<PostForm {...postProps} />)

      // const input = screen
      //   .getByTestId('test-title')
      //   .parentElement?.querySelector('[name]') as HTMLInputElement

      const input = findInput('test-title') as HTMLInputElement
      expect(input.value).toBe('')
      expect(input).toHaveValue('')
    })
    test('should is empty "description" input', () => {
      render(<PostForm {...postProps} />)

      const textarea = findInput('test-body', 'textarea') as HTMLTextAreaElement

      expect(textarea.value).toBe('')
      expect(textarea).toHaveValue('')
    })
    test('click "title" input', () => {
      render(<PostForm {...postProps} />)
      const input = findInput('test-title') as HTMLInputElement

      expect(input.value).toBe('')
      expect(input).not.toHaveFocus()
      userEvent.click(input)
      expect(input).toHaveFocus()
    })
    test('should click "description" input', () => {
      render(<PostForm {...postProps} />)
      const textarea = findInput('test-body', 'textarea') as HTMLTextAreaElement

      expect(textarea.value).toBe('')
      expect(textarea).toHaveValue('')
      expect(textarea).not.toHaveFocus()
      userEvent.click(textarea)
      expect(textarea).toHaveValue('')
      expect(textarea).toHaveFocus()
    })
    test('should write word in "title" input', () => {
      render(<PostForm {...postProps} />)
      const input = findInput('test-title') as HTMLInputElement

      expect(input.value).toBe('')
      expect(input).not.toHaveFocus()
      userEvent.type(input, 'Hello')
      expect(input).toHaveFocus()
      expect(input).toHaveValue('Hello')
    })

    test('should write word in "description" input', () => {
      render(<PostForm {...postProps} />)
      const textarea = findInput('test-body', 'textarea') as HTMLTextAreaElement

      expect(textarea.value).toBe('')
      expect(textarea).not.toHaveFocus()
      userEvent.type(textarea, 'World')
      expect(textarea).toHaveFocus()
      expect(textarea).toHaveValue('World')
    })

    test('should click button with empty button', async () => {
      render(<PostForm {...postProps} />)

      const button = screen.getByRole('button', { name: /submit/i })
      expect(button).toBeInTheDocument()
      expect(button).toBeEnabled()
      await act(async () => userEvent.click(button))
      // await userEvent.click(button)
      expect(postProps.addPost).not.toHaveBeenCalled()
    })
    test('should click button with filled inputs', async () => {
      render(<PostForm {...postProps} />)

      const button = screen.getByRole('button', { name: /submit/i })
      const input = findInput('test-title') as HTMLInputElement
      const textarea = findInput('test-body', 'textarea') as HTMLTextAreaElement

      userEvent.type(input, 'Hello')
      userEvent.type(textarea, 'World')
      expect(button).toBeInTheDocument()

      await act(async () => userEvent.click(button))

      expect(postProps.addPost).toHaveBeenCalled()
      expect(postProps.addPost).toHaveBeenCalledTimes(1)
      expect(postProps.addPost).toHaveBeenCalledWith('Hello', 'World')
      expect(input).toHaveValue('')
      expect(textarea).toHaveValue('')
    })
  })
})
