import sys
from PIL import Image
import numpy as np

a = np.array(Image.open(sys.argv[1]).getdata())
b = np.array(Image.open(sys.argv[2]).getdata())

errors = 0
for i in range(len(a)):
    if(a[i][0] != b[i][0] or a[i][1] != b[i][1] or a[i][2] != b[i][2]):
        errors += 1
print('%.2f' % (100-errors/len(a) * 100))