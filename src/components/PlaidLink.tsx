import { useCallback, useEffect, useState } from 'react';
import { PlaidLinkOnSuccess, PlaidLinkOptions, usePlaidLink } from 'react-plaid-link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { createLinkToken, exchangePublicToken } from '@/lib/actions/user.actions';
import { Button } from './ui/button';

const PlaidLink = ({ user, variant }: PlaidLinkProps) => {
  const router = useRouter();
  const [token, setToken] = useState('initialState');

  useEffect(() => {
    const getLinkToken = async () => {
      const data = await createLinkToken(user);

      setToken(data?.linkToken);
    };

    getLinkToken();
  }, [user]);

  const onSuccess = useCallback<PlaidLinkOnSuccess>(
    async (public_token: string) => {
      await exchangePublicToken({ publicToken: public_token, user });
      router.push('/');
    },
    [user],
  );

  const config: PlaidLinkOptions = {
    token,
    onSuccess,
  };

  const { open, ready } = usePlaidLink(config);

  return (
    <>
      {variant === 'primary' ? (
        <Button onClick={() => open()} disabled={!ready} className="plaidlink-primary">
          Connect Bank
        </Button>
      ) : variant === 'ghost' ? (
        <Button variant={'ghost'} onClick={() => open()} className="plaidlink-ghost">
          <Image src="/icons/connect-bank.svg" width={24} height={24} alt="connect bank" />
          <p className="hidden text-[16px] font-semibold text-black-2 xl:block">Connect bank</p>
        </Button>
      ) : (
        <Button onClick={() => open()} className="plaidlink-default">
          <Image src="/icons/connect-bank.svg" width={24} height={24} alt="connect bank" />
          <p className="text-[16px] font-semibold text-black-2">Connect bank</p>
        </Button>
      )}
    </>
  );
};

export default PlaidLink;
