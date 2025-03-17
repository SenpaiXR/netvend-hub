import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

export default function Header() {
  return (
    <header className='flex justify-between items-center p-4 bg-gray-800 text-white'>
      <h1 className='text-2xl font-bold'>Netvend Hub</h1>
      <WalletMultiButton />
    </header>
  );
}