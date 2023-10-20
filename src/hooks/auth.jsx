import { useContext, createContext, useState, useEffect } from 'react'
import { api } from '../services/api'

const AuthContext = createContext({})

function AuthProvider({ children }) {
  const [data, setData] = useState({})

  async function signIn({ email, password }) {
    try {
      const response = await api.post('/sessions', { email, password })
      const { user, token } = response.data

      api.defaults.headers.common.Authorization = `Bearer ${token}`

      localStorage.setItem('@FoodExplorer: user', JSON.stringify(user))
      localStorage.setItem('@FoodExplorer: token', token)

      setData({
        user,
        token,
      })
    } catch (e) {
      if (e.response) {
        alert(e.response.data.message)
      } else {
        alert('Não foi possível entrar.')
      }
    }
  }

  async function signOut() {
    localStorage.removeItem('@FoodExplorer: user')
    localStorage.removeItem('@FoodExplorer: token')

    setData({})
  }

  async function updateProfile({ user }) {
    try {
      await api.put('/users', user)
      localStorage.setItem('@FoodExplorer: user', JSON.stringify(user))

      setData({ user, token: data.token })

      alert('Perfil atualizado com sucesso!')
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert('Não foi possível fazer o atualizar o perfil.')
      }
    }
  }

  useEffect(() => {
    const user = localStorage.getItem('@FoodExplorer: user')
    const token = localStorage.getItem('@FoodExplorer: token')
    if (user && token) {
      api.defaults.headers.common.Authorization = `Bearer ${token}`
      setData({
        user: JSON.parse(user),
        token,
      })
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        updateProfile,
        user: data.user,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => {
  const context = useContext(AuthContext)

  return context
}

export { AuthProvider, useAuth }
