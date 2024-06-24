
import { create } from 'zustand'

export const useTheme = create((set) => ({
    theme: 'light',
    setTheme: () => set(state => ({
        theme: state.theme === 'light' ? 'dark' : 'light'
    }))
})) 