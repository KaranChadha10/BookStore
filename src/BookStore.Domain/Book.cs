﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BookStore.Domain
{
    public class Book : Entity
    {
        public string  Name { get; set; }
        public string  Author { get; set; }
        public string  Description { get; set; }
        public double Value { get; set; }
        public DateTime PublishedDate { get; set; }
        public int CategoryId { get; set; }
        /* EF Relation */
        public Category Category { get; set; }
    }
}
