import React from "react";
import { RegionProps } from "../types";
export default (props: RegionProps) => (
  <path
    onClick={props.onClick}
    className={`region _${props.owner}`}
    id="Castle Black"
    fill="currentColor"
    stroke="black"
    stroke-width="1"
    d="M 484.00,235.13
      C 487.47,233.61 495.13,229.01 497.96,226.62
        502.96,222.41 503.30,218.75 506.26,217.77
        508.05,217.17 528.92,220.02 530.98,207.99
        531.55,205.95 531.00,204.88 530.98,203.00
        530.22,197.95 533.13,196.09 535.68,192.00
        542.06,181.76 541.71,184.28 548.21,176.42
        548.21,176.42 552.63,170.28 552.63,170.28
        552.63,170.28 558.57,163.99 558.57,163.99
        562.49,158.76 560.58,154.94 562.81,152.99
        564.32,151.68 571.83,151.67 574.00,151.91
        574.00,151.91 640.00,151.91 640.00,151.91
        640.00,151.91 758.00,151.91 758.00,151.91
        759.33,156.18 762.11,159.73 762.50,163.00
        762.93,166.61 759.19,182.26 767.39,191.91
        769.23,194.08 771.69,195.80 774.00,197.45
        776.92,199.54 777.55,200.02 781.00,201.00
        781.00,201.00 787.65,223.00 787.65,223.00
        787.65,223.00 789.22,233.00 789.22,233.00
        789.22,233.00 793.41,245.00 793.41,245.00
        793.41,245.00 793.41,255.00 793.41,255.00
        793.41,255.00 795.70,267.00 795.70,267.00
        795.70,267.00 797.00,283.00 797.00,283.00
        785.19,282.89 775.76,277.44 766.51,270.49
        762.16,267.22 758.36,262.95 753.00,261.26
        745.96,259.05 737.79,263.93 732.00,267.40
        732.00,267.40 711.18,279.21 711.18,279.21
        706.93,283.32 705.62,287.58 704.00,293.00
        698.18,291.15 693.24,287.24 687.91,284.31
        682.50,281.34 664.87,274.61 659.00,275.20
        648.85,276.21 642.22,287.23 635.00,289.83
        629.36,291.88 624.46,288.27 618.00,289.83
        609.29,291.90 603.66,298.09 596.00,301.95
        590.28,304.82 587.56,303.67 582.00,306.98
        567.63,315.53 556.85,335.92 548.91,341.96
        542.25,347.02 542.01,342.80 533.00,345.44
        533.00,345.44 505.01,356.66 505.01,356.66
        498.96,357.53 500.28,354.13 490.00,354.00
        479.76,353.88 473.22,354.78 463.00,352.35
        459.95,351.62 455.74,350.66 454.02,347.78
        451.15,342.96 454.96,339.14 458.00,335.91
        458.00,335.91 469.15,320.99 469.15,320.99
        471.13,316.74 469.70,310.06 467.74,306.00
        466.62,303.66 464.82,301.75 465.11,299.00
        465.72,293.20 472.07,290.64 474.70,285.98
        475.90,283.87 478.62,276.35 478.61,274.00
        478.59,271.97 477.74,269.99 477.37,268.00
        477.37,268.00 476.73,262.00 476.73,262.00
        475.48,255.95 469.68,250.65 465.00,247.00
        467.80,244.24 468.12,244.32 472.00,244.00
        473.61,236.66 477.52,237.95 484.00,235.13 Z
      M 679.00,154.00
      C 679.00,154.00 680.00,155.00 680.00,155.00
        680.00,155.00 680.00,154.00 680.00,154.00
        680.00,154.00 679.00,154.00 679.00,154.00 Z
      M 699.00,154.00
      C 699.00,154.00 700.00,155.00 700.00,155.00
        700.00,155.00 700.00,154.00 700.00,154.00
        700.00,154.00 699.00,154.00 699.00,154.00 Z
      M 648.00,155.00
      C 648.00,155.00 649.00,156.00 649.00,156.00
        649.00,156.00 649.00,155.00 649.00,155.00
        649.00,155.00 648.00,155.00 648.00,155.00 Z
      M 646.00,156.00
      C 646.00,156.00 647.00,157.00 647.00,157.00
        647.00,157.00 647.00,156.00 647.00,156.00
        647.00,156.00 646.00,156.00 646.00,156.00 Z
      M 590.00,157.00
      C 590.00,157.00 591.00,158.00 591.00,158.00
        591.00,158.00 591.00,157.00 591.00,157.00
        591.00,157.00 590.00,157.00 590.00,157.00 Z
      M 579.00,169.00
      C 579.00,169.00 580.00,170.00 580.00,170.00
        580.00,170.00 580.00,169.00 580.00,169.00
        580.00,169.00 579.00,169.00 579.00,169.00 Z
      M 554.00,182.00
      C 554.00,182.00 555.00,183.00 555.00,183.00
        555.00,183.00 555.00,182.00 555.00,182.00
        555.00,182.00 554.00,182.00 554.00,182.00 Z
      M 551.00,189.00
      C 551.00,189.00 552.00,190.00 552.00,190.00
        552.00,190.00 552.00,189.00 552.00,189.00
        552.00,189.00 551.00,189.00 551.00,189.00 Z
      M 545.00,193.00
      C 545.00,193.00 546.00,194.00 546.00,194.00
        546.00,194.00 546.00,193.00 546.00,193.00
        546.00,193.00 545.00,193.00 545.00,193.00 Z
      M 754.00,196.00
      C 754.00,196.00 755.00,197.00 755.00,197.00
        755.00,197.00 755.00,196.00 755.00,196.00
        755.00,196.00 754.00,196.00 754.00,196.00 Z
      M 744.00,225.00
      C 744.00,225.00 745.00,226.00 745.00,226.00
        745.00,226.00 745.00,225.00 745.00,225.00
        745.00,225.00 744.00,225.00 744.00,225.00 Z
      M 736.00,232.00
      C 736.00,232.00 737.00,233.00 737.00,233.00
        737.00,233.00 737.00,232.00 737.00,232.00
        737.00,232.00 736.00,232.00 736.00,232.00 Z
      M 507.00,244.00
      C 507.00,244.00 508.00,245.00 508.00,245.00
        508.00,245.00 508.00,244.00 508.00,244.00
        508.00,244.00 507.00,244.00 507.00,244.00 Z
      M 477.00,255.00
      C 477.00,255.00 478.00,256.00 478.00,256.00
        478.00,256.00 478.00,255.00 478.00,255.00
        478.00,255.00 477.00,255.00 477.00,255.00 Z
      M 581.00,299.00
      C 581.00,299.00 582.00,300.00 582.00,300.00
        582.00,300.00 582.00,299.00 582.00,299.00
        582.00,299.00 581.00,299.00 581.00,299.00 Z
      M 561.00,309.00
      C 561.00,309.00 562.00,310.00 562.00,310.00
        562.00,310.00 562.00,309.00 562.00,309.00
        562.00,309.00 561.00,309.00 561.00,309.00 Z"
  />
);