using System;
using System.IO;
using System.Text;
using System.Text.RegularExpressions;

namespace Lab2
{
    class Program
    {
        static void Main(string[] args)
        {
            //task 1
            Shannon shannon = new Shannon();
            string bin = "100001000001000011111010000110010100001";

            string patternRU = @"[A-Za-z0-9\s+\W_]";
            string patternEN = @"[А-Яа-я0-9\s+\W_]";
            string patternBIN = @"\s+";
            string target = "";

            Regex regexRU = new Regex(patternRU, RegexOptions.IgnoreCase);
            Regex regexEN = new Regex(patternEN, RegexOptions.IgnoreCase);
            Regex regexBIN = new Regex(patternBIN);

            string resultRU = regexRU.Replace("Арсений", target);
            string resultEN = regexEN.Replace("Arseni", target);
            string resultBIN = regexBIN.Replace(bin, target);

            Console.WriteLine("Shannon entrophy RU: " + shannon.ShannonEntropy(resultRU.ToLower()));
            Console.WriteLine("Shannon entrophy EN: " + shannon.ShannonEntropy(resultEN.ToLower()));

            //task 2
            StringBuilder builder = new StringBuilder();
            foreach (char a in resultBIN)
                builder.Append(Convert.ToString(a, 2));


            Console.WriteLine("Shannon entrophy binary: " + shannon.ShannonEntropy(builder.ToString()));

            //task 3
            String name = "Matsiukh Arseni Arhurovich";
            string patternName = @"\s+";
            Regex regexName = new Regex(patternName);
            string resulName = regexName.Replace(name, target);
            double shann = shannon.ShannonEntropy(resultEN.ToLower());
            Console.WriteLine(resulName);

            Console.WriteLine($"FIO: {shannon.AmountOfInformation(resulName, shann)}");
            byte[] bytes = Encoding.ASCII.GetBytes(resulName);
            String ASCII = "";
            foreach (var b in bytes)
                ASCII += b;

            Console.WriteLine("ASCII FIO: " + shannon.AmountOfInformation(ASCII, shann));


            //task4
            Console.WriteLine("Error 0,1: " + shannon.AmountOfInformationWithMistake(shann, resulName, 0.9));
            Console.WriteLine("Error 0,5: " + shannon.AmountOfInformationWithMistake(shann, resulName, 0.5));
            Console.WriteLine("Error 1: " + shannon.AmountOfInformationWithMistake(shann, resulName, 1));

            Console.ReadLine();
        }

    }
}
