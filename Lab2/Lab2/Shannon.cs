﻿using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;

namespace Lab2
{
    class Shannon
    {
        public double ShannonEntropy(string s)
        {
            var map = new Dictionary<char, int>();
            foreach (char c in s)
            {
                if (!map.ContainsKey(c))
                    map.Add(c, 1);
                else
                    map[c] += 1;
            }

            double result = 0.0;
            int len = s.Length;

            var orderkey = from i in map orderby i.Key select i;
            foreach (var item in orderkey)
            {
                using (StreamWriter sw = new StreamWriter("info.log", true, Encoding.Default))
                { sw.Write($"{DateTime.Now} count {item.Key}  = {item.Value} \n"); }
            }

            foreach (var item in map)
            {
                var i = (double)item.Value / len;
                result -= i * Math.Log(i, 2);
            }
            return result;
        }

        public double AmountOfInformation(string message, double shannonEntropy)
        {
            double result = 0.00;
            result = message.Length * shannonEntropy;
            return result;
        }

        public double AmountOfInformationWithMistake(double entropy, string message, double q)
        {
            double result = 0.00;
            result = entropy - (-(1 - q) * Math.Log((1 - q), 2) - q * Math.Log(q, 2)) * message.Length;
            return result;
        }
    }
}
