using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission4_jacklin5.Models
{
    public class GradeCalculatorModel
    {
        [Range(0, 100)]         //Validates the data for me
        public byte Assignments { get; set; }
        public byte Project { get; set; }
        public byte Quiz { get; set; }
        public byte Midterm { get; set; }
        public byte Final { get; set; }
        public byte INTEX { get; set; }

    }
}
