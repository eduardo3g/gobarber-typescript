interface IMailConfig {
  driver: 'ethereal' | 'ses';

  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',

  defaults: {
    from: {
      email:
        process.env.DEFAULT_MAIL_ADDRESS || 'suporte@stepsconsultoria.com.br',
      name: process.env.DEFAULT_MAIL_NAME || 'Eduardo da Steps Consultoria',
    },
  },
} as IMailConfig;
