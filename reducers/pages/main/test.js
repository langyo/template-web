import shortid from 'shortid';

export default (state, action) => ({
  pages: {
    main: {
      text: shortid.generate()
    }
  }
});