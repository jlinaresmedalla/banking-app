import AuthForm from '@/components/AuthForm';

const SignIn = () => {
  return (
    <section className="flex-center size-full max-sm:px-6">
      <form>
        <AuthForm type="sign-in" />
      </form>
    </section>
  );
};

export default SignIn;
