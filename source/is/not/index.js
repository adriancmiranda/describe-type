import notType from './not.type.js';
import notAny from './not.any.js';
import notInstanceOf from './not.instanceOf.js';
import notVectorOf from './not.vectorOf.js';

notType.a = notType.an = notType.type = notType;
notType.any = notAny;
notType.instanceOf = notInstanceOf;
notType.vectorOf = notVectorOf;
export default notType;
