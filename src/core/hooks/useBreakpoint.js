import useWindowSize from './useWindowSize';
import Breakpoint from '../styles/Breakpoints.config';

const useBreakpoint = () => {
  const windowSize = useWindowSize();

  const sortedBreakpoints = Object.keys(Breakpoint)
    .map((item) => [item, Breakpoint[item]])
    .sort((a, b) => b[1] - a[1]);

  const getCurrentBreakpoint = () => {
    for (let i = 0; i < sortedBreakpoints.length; i += 1) {
      const element = sortedBreakpoints[i];

      if (windowSize.width >= element[1]) {
        return element[0];
      }
    }
    return Breakpoint[Breakpoint.length - 1][0];
  };

  return {
    windowSize,
    breakpoint: getCurrentBreakpoint(),
  };
};

export default useBreakpoint;
