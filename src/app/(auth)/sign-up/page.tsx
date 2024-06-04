import AuthForm from '@/components/AuthForm';

const SignUp = () => {
  return (
    <section className="flex-center size-full max-sm:px-6">
      <form>
        <AuthForm type="sign-up" />
      </form>
    </section>
  );
};

export default SignUp;
