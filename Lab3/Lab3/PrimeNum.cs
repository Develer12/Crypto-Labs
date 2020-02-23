using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lab3
{
    class PrimeNum
    {
        public static int PrimeCount(int st, int end)
        {
            int count = end - st + 1;
            int nod = 0;

            int result = 0;
            int ost = 0;
            for(int i = st; i<= end; i++)
            {
                for (int j = 1; j <= i; j++)
                {
                    int del = Nod.GetNOD2(i, j);

                    if (i%j == 0)
                        if(Math.Floor(Convert.ToDouble(i / j)) != 1 || Math.Floor(Convert.ToDouble(i / j)) != i)
                            nod++;

                    if (nod > 2)
                    {
                        count--;
                        break;
                    }
                }
                nod = 0;
            }
            return count;
        }
    }
}
