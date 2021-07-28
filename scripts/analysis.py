"""
Returns 5 values from a data list
"""
import statistics, numpy, ujson

def readFile(filename):
    #Extracts list from json
    with open(filename) as json_file:
        data = ujson.load(json_file)
        key = list(data.keys())[0]
        data = data[key]

    content = []
    for x in data:
        try:
            content.append(float(x))
        except ValueError:
            pass
            
    print(statistics.median(content), numpy.quantile(content, .25))

readFile('../output/eng/eng_pop.json')