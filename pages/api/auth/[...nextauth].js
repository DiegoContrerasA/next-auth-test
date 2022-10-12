import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export const authOptions = {
  // Configure one or more authentication providers
  providers: [

    GoogleProvider({
      clientId: '603443254169-0a7nl5fvgss8snrn8cuggup4bm36m0vl.apps.googleusercontent.com',
      clientSecret: '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'
    })
  ]

}
export default NextAuth(authOptions)
