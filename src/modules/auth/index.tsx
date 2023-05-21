import './styles/main.scss';
import SignInForm from './components/SignInForm/SignInForm';
import { useRef } from 'react';
import { useEffect } from 'react';
import Lottie from 'lottie-web';

const Auth = () => {
  const container = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const anim = Lottie.loadAnimation({
      container: container.current as HTMLDivElement,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('src/assets/icons/whatappltt.json'),
    });
    return () => {
      anim.destroy();
    };
  }, []);

  return (
    <div className="auth">
      <div className="auth__left">
        <SignInForm />
      </div>
      <div className="auth__right" ref={container}></div>
    </div>
  );
};

export default Auth;
