"""
Returns 5 values from a data list
"""
import statistics, numpy

content = range(0,32844)
mean = statistics.mean(content)
std = numpy.std(content)
print(mean, std)

def readFile(filename):
    #Reads files
    with open(filename) as f:
        content = f.readlines()
    content = [x.strip() for x in content] 

    #Removes strings
    content = [x for x in content if not isinstance(x, str)]

    mean = statistics.mean(content)
    numpy.quantile(content, .25)
    numpy.quantile(content, .375)
    numpy.quantile(content, .5)
    numpy.quantile(content, .625)
    numpy.quantile(content, .5)
