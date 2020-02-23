using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lab3
{
    class Nod
    {
        public static int GetNOD2(int val1, int val2)
        {
            val1 = Math.Abs(val1);
            val2 = Math.Abs(val2);
            if (val2 == 0)
                return val1;
            else
                return GetNOD2(val2, val1 % val2);
        }

        public static int GetNOD3(int val1, int val2, int val3)
        {
            val1 = Math.Abs(val1);
            val2 = Math.Abs(val2);
            val3 = Math.Abs(val3);
            if (val2 == 0)
                return GetNOD2(val1, val3);
            else if (val3 == 0 || val1 == 0)
                return GetNOD2(val2, val3);
            else
                return GetNOD3(val3 ,val2 % val3, val1 % val3);
        }
    }
}
