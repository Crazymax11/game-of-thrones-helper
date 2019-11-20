import React from "react";
import { RegionProps } from "../types";
export default (props: RegionProps) => (
  <path
    onClick={props.onClick}
    className={`region _${props.owner}`}
    id="Selection #33"
    fill="currentColor"
    stroke="black"
    stroke-width="1"
    d="M 575.00,1967.70 C 578.90,1967.64 581.56,1971.78 588.17,1971.04 597.90,1969.93 604.20,1963.15 614.00,1966.04 623.10,1968.73 630.30,1976.36 636.00,1976.13 640.36,1975.96 648.43,1970.02 652.00,1967.34 659.76,1961.51 679.63,1944.83 688.00,1942.83 694.99,1941.15 710.72,1949.21 716.91,1952.79 716.91,1952.79 722.17,1956.08 722.17,1956.08 722.17,1956.08 738.00,1959.09 738.00,1959.09 748.34,1968.45 762.90,1958.41 772.00,1959.09 783.08,1960.10 791.75,1968.98 807.00,1969.00 807.00,1969.00 827.00,1969.00 827.00,1969.00 827.00,1969.00 839.00,1968.08 839.00,1968.08 839.00,1968.08 847.00,1968.08 847.00,1968.08 847.00,1968.08 862.00,1964.00 862.00,1964.00 862.00,1967.28 861.45,1973.13 863.60,1975.69 866.50,1979.13 870.64,1977.12 876.00,1978.96 884.11,1981.76 887.62,1986.15 892.00,1987.85 896.03,1989.42 902.57,1989.00 907.00,1989.00 905.10,1998.42 903.80,2008.80 893.00,2011.00 892.51,2002.00 882.77,2009.06 879.04,2011.88 871.21,2017.79 872.49,2024.30 869.44,2027.69 864.20,2033.50 851.57,2026.62 846.00,2024.00 843.61,2033.07 841.08,2028.51 834.00,2030.31 827.20,2032.05 828.52,2034.53 816.00,2033.96 809.12,2033.65 792.32,2028.98 785.00,2027.13 785.00,2027.13 774.00,2024.20 774.00,2024.20 769.88,2024.25 767.97,2027.96 764.00,2028.59 759.72,2029.27 756.17,2025.50 751.01,2026.24 747.04,2026.81 746.12,2029.19 741.96,2030.67 741.96,2030.67 720.00,2037.00 720.00,2037.00 715.86,2033.11 715.20,2034.14 715.00,2028.00 704.10,2026.46 688.27,2020.35 678.00,2016.00 678.00,2016.00 677.00,2022.00 677.00,2022.00 677.00,2022.00 671.00,2025.00 671.00,2025.00 672.05,2029.33 673.55,2034.75 668.00,2036.00 664.49,2047.10 661.23,2044.74 652.00,2047.75 649.64,2048.52 645.48,2050.74 643.17,2050.19 641.04,2049.68 636.48,2044.56 634.00,2042.79 627.90,2038.43 623.20,2038.01 616.00,2037.91 616.00,2037.91 607.00,2037.91 607.00,2037.91 603.37,2037.44 599.57,2035.93 596.00,2036.14 591.49,2036.41 589.03,2039.17 586.43,2037.85 584.19,2036.71 584.18,2033.38 581.57,2030.04 577.48,2024.79 571.61,2023.49 568.23,2017.96 563.56,2010.33 568.31,2003.67 569.66,1996.00 570.47,1992.05 570.52,1981.82 569.66,1978.04 569.66,1978.04 567.00,1972.00 567.00,1972.00 569.20,1970.41 572.22,1967.74 575.00,1967.70 Z"
  />
);