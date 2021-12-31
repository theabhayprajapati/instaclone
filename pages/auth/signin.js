import { getProviders, signIn } from 'next-auth/react'

export default function SignIn({ providers }) {
  const checkProviders = providers && providers.length
  return (
    <>
      <h1>alksdfj i asdkl</h1>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          {' '}
          {console.log(provider.name)}
          <button onClick={() => signIn(provider.id)}>
            Signin with {provider.name}
          </button>
        </div>
      ))}
    </>
  )
}
export async function getServerSideProps() {
  const providers = await getProviders()
  return {
    props: {
      providers,
    },
  }
}



//  !AFTER THIS you will get error from google for authorising the url... so when ever you authorize your url then you have to build this.