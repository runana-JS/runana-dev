export const cubelist={
	'1':{"name":"Edge" , "varcap":["time"],"descreption": "Cube間を連結するもの。timeだけ待機する。"},
	'1000':{"name":"EVAL", "varcap":["content"],"descreption": "eval(content)"},
	'1105':{"name":"JUMP", "varcap":["mark"],"descreption": "Jump to mark"},
	'1106':{"name":"RJMP", "varcap":["mark"],"descreption": "If false jump to mark"},
	'1201':{"name":"SRT","varcap":["variable"],"descreption": "variable.sort!"},
	'1202':{"name":"RSRT", "varcap":["variable"],"descreption": "variable.sort!{|a b| b<=>a}"},
	'1301':{"name":"IF","varcap":["content"],"descreption": "contentを判別し、trueならばtrueのメッセージを出す。falseならばfalseのメッセージを出す。"},
	'1302':{"name":"REV","varcap": [],"descreption": "メッセージがtrueは通さず。メッセージがfalseの時にtrueにして通す。基本的にIFと組み合わせて使う。"},
	'1303':{"name": "FOR","varcap": ["content"],"descreption": "IFと同じ"},
	'1304':{"name": "WHL","varcap": ["content"],"descreption": "C言語のwhile(content) IFと同じ"},
	'1401':{"name": "CALC","varcap": ["content"],"descreption": "eval(content)と同じ"},
	'2000':{"name": "LINE","varcap": ["Variable_name","Source"],"descreption": "eval(variable_name=Source)"},
	'2101':{"name": "GETS","varcap": ["variable_name"],"descreption": "variable_name=gets"},
	'2102':{"name": "IN[]","varcap": ["variables_name","split_words"],"descreption": "variable_name=gets.split(\"split_words\").map!(&:to_i)"},
	'2103':{"name": "DIN","varcap": ["content"],"descreption": "input for debug"},
	'2302':{"name": "PUTS","varcap": ["content"],"descreption": "puts content"},
	'2303':{"name": "PRT","varcap": ["content"],"descreption": "print content"},
	'2304':{"name": "OUT[]","varcap": ["variable_name","split_words"],"descreption": "puts #{variable_name}.join('#{split_words}')"},
	'2305':{"name": "DOUT","varcap": ["content"],"descreption": "output for debug"},
	'3000':{"name": "VAR","varcap": ["variable_name","initialize"],"descreption": "eval(variable_name+\"=\"+\"initialize)"},
	'3001':{"name": "MRK","varcap": ["mark_name"],"descreption": "Jumpの行き着く先です。"},
	'3302':{"name": "Start","varcap": [],"descreption": "開始場所"},
	'3201':{"name": "TOI","varcap": ["variable_name"],"descreption": "variable_name.to_i"},
	'3202':{"name": "MTOI","varcap": ["variable_name"],"descreption": "variable_name.map!(&:to_i)"},
	'3203':{"name": "TOF","varcap": ["variable_name"],"descreption": "variable_name.to_f"},
	'3204':{"name": "MTOF","varcap": ["variable_name"],"descreption": "variable_name.map!(&:to_f)"},
	'3205':{"name": "TOS","varcap": ["variable_name"],"descreption": "variable_name.to_s"},
	'3206':{"name": "MTOS","varcap": ["variable_name"],"descreption": "variable_name.map!(&:to_s)"}
}
