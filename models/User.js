const mongoose = require('mongoose');

// איפיון משתמש:
// אימייל (לא ניתן לשינוי)
// סיסמה
// נייד
// שם (פרטי ומשפחה)
// מגדר
// עיר
// כתובת (רחוב ומספר)
// תאריך לידה
// היסטוריית משימות
// ארנק (מספר, והיסטוריית משיכות: תאריך, כמה...)
// 3 בוליאנים:
// א. האם עשה opt?
// ב. האם יש הרשאת מיקום?
// ג. האם יש הרשאת מצלמה?

const UserSchema = new mongoose.Schema({
  email: {
      type: String,
      required: true
  },
  password: {
      type: String,
      required: true
  },
  phone: {
      type: String,
      required: true
  },
  name: {
      first: {
        type: String,
        required: true
    },
      last: {
        type: String,
        required: true
    },
  },
  gender: {
      type: String,
      required: true
  },
  city: {
    type: String,
    required: true
  },
  address: {
      street: {
        type: String,
        required: true
    },
      number: {
        type: String,
        required: true
    },
  },
  dateOfBirth: {
    type: Date,
    required: true
  },
  tasks: [
      {
        type: schema.Types.ObjectId,
        ref: "TaskPerformed"
    }
  ],
  purse: {
      balance: {
        type: Number,
        default: 0
    },
      withdrawals: [
          {
          date: Date,
          amount: Number
      }
    ]
  },
  isOPT: Boolean,
  isLocationPermission: Boolean,
  isCameraPermission: Boolean,



  created: {
    type: Date,
    default: Date.now
  },
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  HallOwner: {
    type: mongoose.Types.ObjectId,
    ref: 'HallOwner',
    required: true
  },
  KitchenManager: {
    type: mongoose.Types.ObjectId,
    ref: 'KitchenManager',
    required: true
  }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;