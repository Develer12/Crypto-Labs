using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lab3
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("NOD for 2 nums: " + Nod.GetNOD2(54, 27));
            Console.WriteLine("NOD for 3 nums: " + Nod.GetNOD3(54, 27, 9));
            Console.WriteLine("Count of prime nums [2, 577]: " + PrimeNum.PrimeCount(2, 577));
            Console.WriteLine("Count of prime nums [540, 577]: " + PrimeNum.PrimeCount(540, 577));
            Console.ReadKey();
        }
    }
}
