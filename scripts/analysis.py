"""
Returns 5 values from a data list
"""
import statistics, numpy, ujson

content = range(0,32844)
median = statistics.median(content)
quartile = numpy.quantile(content, .25)

def readFile(filename):
    #Extracts list from json
    with open(filename) as json_file:
        data = ujson.load(json_file)
        key = list(data.keys())[0]
        data = data[key]

    parsed_content = []
    for x in content:
        try:
            parsed_content.append(float(x))
        except ValueError:
            pass
            
    print(statistics.median(parsed_content))

readFile('../output/eng/eng_mob.json')