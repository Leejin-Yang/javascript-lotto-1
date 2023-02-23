import { ERROR_MESSAGE } from '../../constants/error';
import { LOTTO } from '../../constants/setting';

const isLessThanMinimum = (purchaseAmount) => purchaseAmount < LOTTO.UNIT;
const hasChange = (purchaseAmount) => purchaseAmount % LOTTO.UNIT !== 0;

const validatePurchaseAmount = (purchaseAmount) => {
  if (isLessThanMinimum(purchaseAmount)) {
    throw new Error(ERROR_MESSAGE.LESS_THAN_MINIMUM);
  }
  if (hasChange(purchaseAmount)) {
    throw new Error(ERROR_MESSAGE.HAS_CHANGE);
  }
};

export default validatePurchaseAmount;
