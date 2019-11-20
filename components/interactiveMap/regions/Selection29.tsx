import React from "react";
import { RegionProps } from "../types";
export default (props: RegionProps) => (
  <path
    onClick={props.onClick}
    className={`region _${props.owner}`}
    id="Selection #29"
    fill="currentColor"
    stroke="black"
    stroke-width="1"
    d="M 318.90,1764.00 C 318.50,1768.30 315.94,1772.77 314.52,1777.00 311.95,1784.62 311.25,1789.29 309.80,1797.00 308.24,1805.33 309.53,1813.95 303.61,1820.91 295.60,1830.33 280.81,1831.48 275.84,1839.04 270.27,1847.52 272.67,1867.29 261.00,1875.04 256.01,1878.35 235.68,1886.37 230.00,1887.11 225.92,1887.64 224.79,1885.55 221.00,1885.81 221.00,1885.81 205.00,1890.23 205.00,1890.23 193.28,1894.42 180.19,1910.57 168.00,1909.78 164.83,1909.57 152.93,1906.77 151.84,1903.75 151.05,1901.56 152.50,1898.35 152.96,1896.00 152.96,1896.00 152.96,1883.00 152.96,1883.00 152.06,1873.71 139.31,1864.25 137.36,1855.01 136.31,1850.07 141.43,1848.72 144.81,1842.91 150.41,1833.32 144.80,1830.39 152.04,1816.02 155.07,1810.01 160.10,1809.12 166.00,1806.81 166.00,1806.81 183.00,1798.66 183.00,1798.66 188.08,1796.38 192.59,1795.69 196.05,1790.95 198.52,1787.56 201.62,1782.16 202.29,1778.00 202.29,1778.00 202.29,1770.00 202.29,1770.00 202.29,1770.00 206.13,1757.00 206.13,1757.00 209.31,1748.35 213.40,1746.45 217.50,1740.96 221.14,1736.06 219.51,1734.17 226.00,1731.00 227.94,1737.56 235.15,1742.44 242.00,1742.74 242.00,1742.74 250.00,1742.00 250.00,1742.00 250.00,1742.00 259.00,1741.05 259.00,1741.05 263.31,1739.93 265.17,1736.78 269.00,1736.91 277.49,1737.20 276.96,1745.22 282.11,1747.12 284.41,1747.83 287.44,1747.01 290.00,1747.12 290.00,1747.12 301.00,1750.10 301.00,1750.10 301.00,1750.10 316.00,1746.00 316.00,1746.00 316.57,1752.28 319.49,1757.56 318.90,1764.00 Z"
  />
);
