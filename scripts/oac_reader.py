from pdfminer.high_level import extract_text
from get_root import inputdir, outputdir
import re, os
import ujson

text = extract_text(inputdir + 'des_uk/UK Classification Description.pdf')

#Removes start
text = text[text.find('Supergroup, Group and Subgroup descriptions \n'):]

#Removes footer
text = re.sub(r'Office for National Statistics.*\n.*\n.*', '', text)
text = re.sub(r'[0-9]+ \n', '', text)

#Removes misc code
text = re.sub(r'+ \n', '', text)

#Fixes fash
text = re.sub(u"\u2013", "-", text)

#Gets codes
codes = re.findall(r'\d - |\d[a-z] - |\d[a-z]\d - ', text)
codes = [code.replace(' - ', '') for code in codes]

#Gets titles
titles = re.findall(r'\d - [A-Za-z- ]*|\d[a-z] - [A-Za-z- ]*|\d[a-z]\d - [A-Za-z- ]*', text)
titles = [title.split(' - ', 1)[1].strip() for title in titles]

#Iteratation preparation
count = len(titles)
text = ' '.join(text.split())

#Gets descriptions
def writeClassification():

	#Headers
	supergroup = ''
	group = ''
	subgroup = ''
	data = {'data': []}

	for index in range(count):

		code = codes[index]
		title = titles[index]

		combined_first = code + ' - ' + title

		if index == count-1:
			combined_second = ''
		else:
			combined_second = codes[index+1] + ' - ' + titles[index+1]

		desc = text[text.find(combined_first):text.find(combined_second)].replace(combined_first, '').strip()

		if len(code) == 1:
			supergroup = code
			group = ''
			subgroup = ''

		elif len(code) == 2:
			supergroup = code[0]
			group = code[1]
			subgroup = ''

		elif len(code) == 3:
			supergroup = code[0]
			group = code[1]
			subgroup = code[2]

		data['data'].append({
			"title": title,
			"code": code,
			"desc": desc,
			"supergroup": supergroup,
			"group": group,
			"subgroup": subgroup
		})
	
	return data