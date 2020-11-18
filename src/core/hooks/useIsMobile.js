import useBreakpoint from './useBreakpoint';

const useIsMobile = () => {
  const mobileBreakpoints = ['min', 'mobile', 'tablet'];
  const { breakpoint } = useBreakpoint();
  const isMobile = mobileBreakpoints.includes(breakpoint);

  return {
    isMobile,
  };
};

export default useIsMobile;