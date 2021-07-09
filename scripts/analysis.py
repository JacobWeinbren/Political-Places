"""
Returns 5 values from a data list
"""
import statistics, numpy

content = range(0,32844)
median = statistics.median(content)
quartile = numpy.quantile(content, .25)

def readFile(filename):
    #Reads files
    with open(filename) as f:
        content = f.readlines()

    parsed_content = []
    for x in content:
        try:
            parsed_content.append(float(x))
        except ValueError:
            pass
            
    print(statistics.median(parsed_content))

readFile('../output/eng/eng_mob.csv')