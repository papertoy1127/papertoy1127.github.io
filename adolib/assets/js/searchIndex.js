
var camelCaseTokenizer = function (builder) {

  var pipelineFunction = function (token) {
    var previous = '';
    // split camelCaseString to on each word and combined words
    // e.g. camelCaseTokenizer -> ['camel', 'case', 'camelcase', 'tokenizer', 'camelcasetokenizer']
    var tokenStrings = token.toString().trim().split(/[\s\-]+|(?=[A-Z])/).reduce(function(acc, cur) {
      var current = cur.toLowerCase();
      if (acc.length === 0) {
        previous = current;
        return acc.concat(current);
      }
      previous = previous.concat(current);
      return acc.concat([current, previous]);
    }, []);

    // return token for each string
    // will copy any metadata on input token
    return tokenStrings.map(function(tokenString) {
      return token.clone(function(str) {
        return tokenString;
      })
    });
  }

  lunr.Pipeline.registerFunction(pipelineFunction, 'camelCaseTokenizer')

  builder.pipeline.before(lunr.stemmer, pipelineFunction)
}
var searchModule = function() {
    var documents = [];
    var idMap = [];
    function a(a,b) { 
        documents.push(a);
        idMap.push(b); 
    }

    a(
        {
            id:0,
            title:"SettingsUI",
            content:"SettingsUI",
            description:'',
            tags:''
        },
        {
            url:'/ADOLib/api/ADOLib.Settings/SettingsUI',
            title:"SettingsUI",
            description:""
        }
    );
    a(
        {
            id:1,
            title:"InvalidMode",
            content:"InvalidMode",
            description:'',
            tags:''
        },
        {
            url:'/ADOLib/api/ADOLib.Settings/InvalidMode',
            title:"InvalidMode",
            description:""
        }
    );
    a(
        {
            id:2,
            title:"LogType",
            content:"LogType",
            description:'',
            tags:''
        },
        {
            url:'/ADOLib/api/ADOLib/LogType',
            title:"LogType",
            description:""
        }
    );
    a(
        {
            id:3,
            title:"Category",
            content:"Category",
            description:'',
            tags:''
        },
        {
            url:'/ADOLib/api/ADOLib.Settings/Category',
            title:"Category",
            description:""
        }
    );
    a(
        {
            id:4,
            title:"SafeGetter",
            content:"SafeGetter",
            description:'',
            tags:''
        },
        {
            url:'/ADOLib/api/ADOLib.SafeTools/SafeGetter_1',
            title:"SafeGetter<T>",
            description:""
        }
    );
    a(
        {
            id:5,
            title:"SettingCategory",
            content:"SettingCategory",
            description:'',
            tags:''
        },
        {
            url:'/ADOLib/api/ADOLib.Settings/SettingCategory',
            title:"SettingCategory",
            description:""
        }
    );
    a(
        {
            id:6,
            title:"ADOLib",
            content:"ADOLib",
            description:'',
            tags:''
        },
        {
            url:'/ADOLib/api/ADOLib/ADOLib',
            title:"ADOLib",
            description:""
        }
    );
    a(
        {
            id:7,
            title:"ForceType",
            content:"ForceType",
            description:'',
            tags:''
        },
        {
            url:'/ADOLib/api/ADOLib.Settings/ForceType',
            title:"ForceType",
            description:""
        }
    );
    a(
        {
            id:8,
            title:"Angle",
            content:"Angle",
            description:'',
            tags:''
        },
        {
            url:'/ADOLib/api/ADOLib/Angle',
            title:"Angle",
            description:""
        }
    );
    a(
        {
            id:9,
            title:"Editor",
            content:"Editor",
            description:'',
            tags:''
        },
        {
            url:'/ADOLib/api/ADOLib/Editor',
            title:"Editor",
            description:""
        }
    );
    a(
        {
            id:10,
            title:"SafePatchAttribute",
            content:"SafePatchAttribute",
            description:'',
            tags:''
        },
        {
            url:'/ADOLib/api/ADOLib.SafeTools/SafePatchAttribute',
            title:"SafePatchAttribute",
            description:""
        }
    );
    a(
        {
            id:11,
            title:"Setting",
            content:"Setting",
            description:'',
            tags:''
        },
        {
            url:'/ADOLib/api/ADOLib.Translation/Setting',
            title:"Setting",
            description:""
        }
    );
    a(
        {
            id:12,
            title:"SafeGetterHelper",
            content:"SafeGetterHelper",
            description:'',
            tags:''
        },
        {
            url:'/ADOLib/api/ADOLib.SafeTools/SafeGetterHelper',
            title:"SafeGetterHelper",
            description:""
        }
    );
    a(
        {
            id:13,
            title:"SafePatchHelper",
            content:"SafePatchHelper",
            description:'',
            tags:''
        },
        {
            url:'/ADOLib/api/ADOLib.SafeTools/SafePatchHelper',
            title:"SafePatchHelper",
            description:""
        }
    );
    a(
        {
            id:14,
            title:"MoreGUILayout",
            content:"MoreGUILayout",
            description:'',
            tags:''
        },
        {
            url:'/ADOLib/api/ADOLib.Settings/MoreGUILayout',
            title:"MoreGUILayout",
            description:""
        }
    );
    a(
        {
            id:15,
            title:"Translator",
            content:"Translator",
            description:'',
            tags:''
        },
        {
            url:'/ADOLib/api/ADOLib.Translation/Translator',
            title:"Translator",
            description:""
        }
    );
    a(
        {
            id:16,
            title:"SafeTools",
            content:"SafeTools",
            description:'',
            tags:''
        },
        {
            url:'/ADOLib/api/ADOLib.SafeTools/SafeTools',
            title:"SafeTools",
            description:""
        }
    );
    a(
        {
            id:17,
            title:"Misc",
            content:"Misc",
            description:'',
            tags:''
        },
        {
            url:'/ADOLib/api/ADOLib.Misc/Misc',
            title:"Misc",
            description:""
        }
    );
    a(
        {
            id:18,
            title:"CategoryAttribute",
            content:"CategoryAttribute",
            description:'',
            tags:''
        },
        {
            url:'/ADOLib/api/ADOLib.Settings/CategoryAttribute',
            title:"CategoryAttribute",
            description:""
        }
    );
    a(
        {
            id:19,
            title:"Angle AngleType",
            content:"Angle AngleType",
            description:'',
            tags:''
        },
        {
            url:'/ADOLib/api/ADOLib/AngleType',
            title:"Angle.AngleType",
            description:""
        }
    );
    a(
        {
            id:20,
            title:"GUIExtended",
            content:"GUIExtended",
            description:'',
            tags:''
        },
        {
            url:'/ADOLib/api/ADOLib.Settings/GUIExtended',
            title:"GUIExtended",
            description:""
        }
    );
    var idx = lunr(function() {
        this.field('title');
        this.field('content');
        this.field('description');
        this.field('tags');
        this.ref('id');
        this.use(camelCaseTokenizer);

        this.pipeline.remove(lunr.stopWordFilter);
        this.pipeline.remove(lunr.stemmer);
        documents.forEach(function (doc) { this.add(doc) }, this)
    });

    return {
        search: function(q) {
            return idx.search(q).map(function(i) {
                return idMap[i.ref];
            });
        }
    };
}();
