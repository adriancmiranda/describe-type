import notType from './not.type.next.js';
import notAny from './not.any.next.js';
import notInstanceOf from './not.instanceOf.next.js';
import notArrayOf from './not.arrayOf.next.js';

notType.a = notType.an = notType.type = notType;
notType.any = notAny;
notType.arrayOf = notArrayOf;
notType.instanceOf = notInstanceOf;
export default notType;
