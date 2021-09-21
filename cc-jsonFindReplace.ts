export class FindReplace {
  constructor() {}

  public static replaceByValue(object: any, value: string, replaceValue: string): void {
    for (const key in object) {
      if (typeof object[key] === typeof {}) {
        this.replaceByValue(object[key], value, replaceValue);
      }

      if (object[key] === value) {
        object[key] = replaceValue;
      }
    }
  }

  public static replaceByProperty(object: any, prop: string, replaceValue: string): void {
    for (const key in object) {
      if (typeof object[key] === typeof {}) {
        this.replaceByProperty(object[key], prop, replaceValue);
      }

      if (key === prop) {
        object[key] = replaceValue;
      }
    }
  }

  public static replaceByPropertyAndValue(object: any, prop: string, value: string, replaceValue: string): void {
    for (const key in object) {
      if (typeof object[key] === typeof {}) {
        this.replaceByPropertyAndValue(object[key], prop, value, replaceValue);
      }

      if (object[key] === value) {
        object[prop] = replaceValue;
      }
    }
  }
}



/**
 * Example:
 * 
 * FindReplace.replaceByValue(object, 'Moers', 'REPLACED VALUE');
 * FindReplace.replaceByProperty(object, 'city', 'REPLACED VALUE');
 * FindReplace.replaceByPropertyAndValue(object, 'city', 'Moers', 'REPLACED VALUE');
 * 
 * let object = [
	{ "plz": 47441,
	  "city": "Moers",
	  "lattitude": 51.4463,
	  "longitude": 6.6396
	},
	{ "plz": 47798,
	  "city": "Krefeld",
	  "lattitude": 51.3311,
	  "longitude": 6.5616
	}
  ];
 */
