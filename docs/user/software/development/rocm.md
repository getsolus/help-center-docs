---
title: ROCm/HIP
summary: A quick guide to getting set up for ROCm/HIP development on Solus
---

# ROCm/HIP

ROCm is AMD's open-source software stack for GPU computation.

Note that ROCm is not required in order for, say, your display or browser, to
use GPU-acclerated rendering. These are more on the driver side of things and 
are
handled by the kernel and/or Mesa. ROCm is mainly focused on GPU-accelerated
computing, such as GPU rendering in Blender or GPU-accelerated machine learning
in PyTorch.

## Install ROCm/HIP

```bash
sudo eopkg it rocm-hip rocm-opencl
```

If you are also developing with ROCm/HIP, install the
development files and the `hipcc` compiler driver as well:
```bash
sudo eopkg it rocm-hip-devel
```

## Necessary Environment Variables

It is recommended and safe to put these environment variables in your
`~/.bashrc`:
```bash
export ROCM_PATH=/usr
export HIP_PATH=/usr
```

If you're developing with ROCm/HIP, the following environment variables will
save you a lot of hassle:
```bash
export HIP_DEVICE_LIB_PATH=/usr/lib64/amdgcn/bitcode
export DEVICE_LIB_PATH=$HIP_DEVICE_LIB_PATH
export HIP_PLATFORM=amd
export HIP_RUNTIME=amd
export HIP_ROCCLR_HOME=$ROCM_PATH
```

## Supported Hardware and GPU Architectures

<!--
ROCm is designed such that in order to for the compiled binaries to run on a 
certain GPU model, during compiling one must compile with that GPU as the
compilation target. 
!-->

ROCm is designed such that in order for a library to support N different GPU
architectures, that library must be compiled N times, once for each
architecture, causing the build time of a package to grow linearly. For example,
if we want PyTorch to support running on 5 different GPU architectures, we
essentially need to compile PyTorch 5 times. It should be obvious this quickly
becomes a maintenance burden as the compile time grows linearly with respect to
the number of GPUs models we want to support.

Therefore, we have carefuly picked
the following baseline
architectures such that we support as many reasonably recent
hardware as possible while not causing compilation times to skyrocket. Any GPU
architecture in the list below should work out-of-the-box.

- `gfx803`
- `gfx900`
- `gfx906`
- `gfx908`
- `gfx90a`
- `gfx1010`; for `gfx101*` GPUs such as `gfx1011` and `gfx1012`, see [Emulating
  as a Supported Architecture](#emulating-as-a-supported-architecture) section.
- `gfx1030`; for `gfx103*` GPUs such as `gfx1031` and `gfx1032`, see [Emulating
  as a Supported Architecture](#emulating-as-a-supported-architecture) section.
- `gfx1010`
- `gfx1011`
- `gfx1012`

:::tip

Run `rocminfo` provided by the `rocminfo` package to 
see what architecture your GPU(s) have.

:::

:::note

This list is only the minimum supported architectures. Some packages like
[Blender](#blender) are built with support for even more architectures.

:::

If your GPU model is not on the list, please open an issue in
our [Issue Tracker] with your GPU model and the year that this model is
released.

### Emulating as a Supported Architecture

Several GPU archiectures, such as those in the Navi 1 family, have
almost identical (if not exactly identical) ISA that allows a program compiled for
one architecture to run seamlessly on other. 
For example, any program compiled for the `gfx1030` architecture can also run on
the `gfx1031` and `gfx1032` architectures. A list of such architectures is
listed in the previous section.

To emulate your GPU as a supported architecture, the environment variable
`HSA_OVERRIDE_GFX_VERSION` must be specified. Examples:

Emulating as `gfx1030`:
```bash
export HSA_OVERRIDE_GFX_VERSION=10.3.0
```

Emulating as `gfx1010`:
```bash
export HSA_OVERRIDE_GFX_VERSION=10.1.0
```

Emulating as `gfx900`:
```bash
export HSA_OVERRIDE_GFX_VERSION=9.0.0
```

## Specifying which GPU to use

Sometimes, it may be hard or impossible to tell your program to use the GPU
that you want. This not only happnes on a system with multiple GPUs; this can 
also happen when your CPU is also made by AMD and has an
integrated GPU. You can check whether your CPU has usable integrated graphics as
well by running `linux-driver-management status`. If your CPU has
integrated graphics and you have turned on switchable/hybrid graphics in your
BIOS, you may see something like the following:
```
Hybrid Graphics

 ╒ Primary GPU (iGPU)
 ╞ Device Name   : Cezanne [Radeon Vega Series / Radeon Vega Mobile Series]
 ╞ Manufacturer  : Advanced Micro Devices, Inc. [AMD/ATI]
 ╞ Product ID    : 0x1669
 ╞ Vendor ID     : 0x1002
 ╞ X.Org PCI ID  : PCI:7:0:0
 ╘ Boot VGA      : yes

 ╒ Secondary GPU (dGPU)
 ╞ Device Name   : Navi 23 [Radeon RX 6600/6600 XT/6600M]
 ╞ Manufacturer  : Advanced Micro Devices, Inc. [AMD/ATI]
 ╞ Product ID    : 0x73ab
 ╞ Vendor ID     : 0x1002
 ╞ X.Org PCI ID  : PCI:2:0:0
 ╘ Boot VGA      : no
```

ROCm/HIP offers the environment variable `HIP_VISIBLE_DEVICES` to control which 
GPUs are visible to a process from the ROCm/HIP API. Only devices whose index 
is present in the sequence are visible to HIP. For example, `export
HIP_VISIBLE_DEVICES=0` makes only the GPU with device index 0 visible, and
`export HIP_VISIBLE_DEVICES=0,2` makes only the GPUs with device indices 0 and 2
visible.

:::caution

The device index is **NOT** its agent number in the output of `rocminfo`! You
can find your device's corresponding index through the output of `rocm-smi`,
provided by the `rocm-smi` package.

:::

:::note

As suggested by its name, `HIP_VISIBLE_DEVICES` only hides the GPU from the 
ROCm/HIP side. A program can still access GPUs hidden by `HIP_VISIBLE_DEVICES`
by calling other graphics APIs such as OpenGL.

:::

## Software-Specific Instructions

### Blender

### PyTorch


## Reporting an Issue


