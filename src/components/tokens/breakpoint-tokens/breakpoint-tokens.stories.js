import template from './breakpoint-tokens.twig';

import tokens from '../../../tokens/sd.tokens.json';

const data = { breakpoint: tokens.breakpoint };

export default {
  title: 'Tokens/Breakpoints',
};

export const Breakpoints = () => template(data);