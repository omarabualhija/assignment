/**
 * @ Author: omar abu alhija
 
 * @ Modified by: Your name
 * @ Modified time: 2022-12-12 19:56:50
 * @ Description:
 */

interface Itype {
  Bold: string;
  Regular: string;
}

const fontFamily: Itype = {
  Bold: 'Changa-Bold',
  Regular: 'Changa-Regular',
};

const container: {flex: number} = {
  flex: 1,
};

export default {
  fontFamily,
};
