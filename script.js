function mt2pt()
{
    var txt1 = document.getElementById('mt_field').value;

    var mt2pt_dict = {
        'a':"Haa",
        'b':"Ethaa",
        'c':"Hass",
        'd':"Ssaah",
        'e':"Ssss",
        'f':"Hassay",
        'g':"Ehhh",
        'h':"Seethaaa",
        'i':"Aayaa",
        'j':"Sheaaya",
        'k':"Ayaahath",
        'l':"Hathehh",
        'm':"ssssehhh",
        'n':"Seyythaa",
        'o':"Ayaeeh",
        'p':"Aaah",
        'q':"Atheya",
        'r':"Hasseey",
        's':"Ssssaytha",
        't':"Ssseyaa",
        'u':"Esseytha",
        'v':"Saahthay",
        'w':"Hatheeey",
        'x':"Seeeeeh",
        'y':"Haaaaaah",
        'z':"Ssssseettth"
    };

    var mt = txt1.split(" ");
    var pt = "";
    var x = "";

    for (let i = 0; i < mt.length; i++) {
        for (let j = 0; j < mt[i].length; j++) {
            x = mt2pt_dict[mt[i][j].toLowerCase()];
            if(x == undefined)
            {x = mt[i][j];
            }
            pt += x;
        }
        pt += " ";
    }

    document.getElementById('pt_field').value = pt.trim();

    // return pt.trim();

}

function pt2mt()
{
    var txt1 = document.getElementById('pt_field').value;
    
    var pt2mt_dict = {
        "Haa":"A",
        "Ethaa":"B",
        "Hass":"C",
        "Ssaah":"D",
        "Ssss":"E",
        "Hassay":"F",
        "Ehhh":"G",
        "Seethaaa":"H",
        "Aayaa":"I",
        "Sheaaya":"J",
        "Ayaahath":"K",
        "Hathehh":"L",
        "ssssehhh":"M",
        "Seyythaa":"N",
        "Ayaeeh":"O",
        "Aaah":"P",
        "Atheya":"Q",
        "Hasseey":"R",
        "Ssssaytha":"S",
        "Ssseyaa":"T",
        "Esseytha":"U",
        "Saahthay":"V",
        "Hatheeey":"W",
        "Seeeeeh":"X",
        "Haaaaaah":"Y",
        "Ssssseettth":"Z",
        "Haa":'a',
        "Ethaa":'b',
        "Hass":'c',
        "Ssaah":'d',
        "Ssss":'e',
        "Hassay":'f',
        "Ehhh":'g',
        "Seethaaa":'h',
        "Aayaa":'i',
        "Sheaaya":'j',
        "Ayaahath":'k',
        "Hathehh":'l',
        "ssssehhh":'m',
        "Seyythaa":'n',
        "Ayaeeh":'o',
        "Aaah":'p',
        "Atheya":'q',
        "Hasseey":'r',
        "Ssssaytha":'s',
        "Ssseyaa":'t',
        "Esseytha":'u',
        "Saahthay":'v',
        "Hatheeey":'w',
        "Seeeeeh":'x',
        "Haaaaaah":'y',
        "Ssssseettth":'z'
    };

    var pt = txt1.split(" ");
    var mt = "";
    var ej = 0;
    var x = "";

    for (let i = 0; i < pt.length; i++) {
    
        pt[i] += "Z";
        ej = 0;

        for (let j = 0; j < pt[i].length; j++) {
            if (pt[i][j] === pt[i][j].toUpperCase()) {
                x = pt2mt_dict[pt[i].slice(ej, j)];
                if(x == undefined)
                {
                    x = pt[i].slice(ej, j);
                }
                mt += x; 
                ej = j;        
            }
        }
        mt += " "
    }

    document.getElementById('mt_field').value = mt.trim();
    
    // return mt.trim();

}